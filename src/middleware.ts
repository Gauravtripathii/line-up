import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    const isPublicPath: boolean = path === '/login' || path === '/register' || path === '/';

    const token = request.cookies.get("token")?.value || "";

    if (isPublicPath && token)
        return NextResponse.redirect(new URL('/courses', request.nextUrl));

    if (!isPublicPath && !token)
        return NextResponse.redirect(new URL('/login', request.nextUrl));

}

export const config = {
    matcher: [
        '/',
        '/login',
        '/register',
        '/courses',
        '/courses/:path*'
    ]
}

