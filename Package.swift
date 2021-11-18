// swift-tools-version:5.5
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "capacitor-bundle-test",
    products: [
        .executable(name: "capacitor_bundler", targets: ["CapacitorBundler"])
    ],
    targets: [
        .executableTarget(name: "CapacitorBundler")
    ]
)
