rootProject.name = "my-portfolio"

addProject(":backend", "backend")

fun addProject(
    name: String, projectPath: String
) {
    val folder = file(projectPath)
    if (folder.exists()) {
        include(name)
        project(name).projectDir = folder
    }
}

pluginManagement {
    repositories {
        gradlePluginPortal()
        mavenCentral()
    }
}
