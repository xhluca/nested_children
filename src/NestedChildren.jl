
module NestedChildren
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("componenta.jl")
include("componentb.jl")
include("componentc.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "nested_children",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "nested_children.min.js",
    external_url = "https://unpkg.com/nested_children@0.0.1/nested_children/nested_children.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "nested_children.min.js.map",
    external_url = "https://unpkg.com/nested_children@0.0.1/nested_children/nested_children.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
