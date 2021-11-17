// swift-tools-version:5.5
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "capacitor-bundle-test",
    platforms: [
        .iOS(.v14)
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
