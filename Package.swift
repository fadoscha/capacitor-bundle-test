// swift-tools-version:5.5
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "capacitor-bundle-test",
    platforms: [
        .iOS(.v14)
    ],
    products: [
        .library(
            name: "web-app",
            targets: ["web-app"]),
    ],
    targets: [
        .target(
            name: "web-app",
            dependencies: [],
            resources: [
                .copy("Resources/public")
            ]),
    ]
)
