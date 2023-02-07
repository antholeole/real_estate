{ pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell {
    nativeBuildInputs = [
        pkgs.buildPackages.nodejs-19_x
        pkgs.buildPackages.wrangler
        pkgs.buildPackages.pulumi
    ];
}
