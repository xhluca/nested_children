# AUTO GENERATED FILE - DO NOT EDIT

export componenta

"""
    componenta(;kwargs...)
    componenta(children::Any;kwargs...)
    componenta(children_maker::Function;kwargs...)


A ComponentA component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Children
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `a` (String; optional): A
- `b` (String; optional): A
- `c` (String; optional): A
"""
function componenta(; kwargs...)
        available_props = Symbol[:children, :id, :a, :b, :c]
        wild_props = Symbol[]
        return Component("componenta", "ComponentA", "nested_children", available_props, wild_props; kwargs...)
end

componenta(children::Any; kwargs...) = componenta(;kwargs..., children = children)
componenta(children_maker::Function; kwargs...) = componenta(children_maker(); kwargs...)

