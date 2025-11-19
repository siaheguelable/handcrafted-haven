import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)

    // Get query parameters
    const category = searchParams.get('category')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    const search = searchParams.get('search')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')

    // Calculate offset for pagination
    const offset = (page - 1) * limit

    // Build where clause
    const where = {
      inStock: true,
    }

    if (category && category !== 'all') {
      where.category = category
    }

    if (minPrice || maxPrice) {
      where.priceCents = {}
      if (minPrice) {
        where.priceCents.gte = parseInt(minPrice) * 100 // Convert dollars to cents
      }
      if (maxPrice) {
        where.priceCents.lte = parseInt(maxPrice) * 100 // Convert dollars to cents
      }
    }

    if (search) {
      where.OR = [
        {
          name: {
            contains: search,
            mode: 'insensitive',
          },
        },
        {
          description: {
            contains: search,
            mode: 'insensitive',
          },
        },
      ]
    }

    // Fetch products with pagination
    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        skip: offset,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.product.count({ where }),
    ])

    // Get unique categories for filter
    const categories = await prisma.product.findMany({
      select: {
        category: true,
      },
      distinct: ['category'],
      where: {
        inStock: true,
        category: {
          not: null,
        },
      },
    })

    const uniqueCategories = categories
      .map((p) => p.category)
      .filter(Boolean)
      .sort()

    return NextResponse.json({
      products,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
      categories: uniqueCategories,
    })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}