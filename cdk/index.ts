import * as cloudflare from "@pulumi/cloudflare";


const deploymentConfig = {
    environmentVariables: {
        NODE_VERSION: 17
    }
}

const project = new cloudflare.PagesProject("project", {
    name: "testing-project",
    accountId: "e0d74c227439ece29e62209d109ae43e",
    deploymentConfigs: {
        production: deploymentConfig,
        preview: deploymentConfig,
    },
    buildConfig: {
        buildCommand: "sh scripts/pages_deploy.sh",
        destinationDir: "client/dist",
    },
    source: {
        type: "github",
        config: {
            deploymentsEnabled: true,
            owner: "antholeole",
            repoName: "real_estate", //TODO: get this from GH actions
            prCommentsEnabled: true,
            previewBranchExcludes: [
                "main",
            ],
            previewBranchIncludes: [
                "dev",
            ],
            previewDeploymentSetting: "custom",
            productionBranch: "main",
            productionDeploymentEnabled: true,
        }
    },
    productionBranch: "main",
});
