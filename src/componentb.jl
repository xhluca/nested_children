# AUTO GENERATED FILE - DO NOT EDIT

export componentb

"""
    componentb(;kwargs...)
    componentb(children::Any;kwargs...)
    componentb(children_maker::Function;kwargs...)


A ComponentB component.
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
- `d` (String; optional): A
- `e` (String; optional): A
"""
function componentb(; kwargs...)
        available_props = Symbol[:children, :id, :a, :b, :c, :d, :e]
        wild_props = Symbol[]
        return Component("componentb", "ComponentB", "nested_children", available_props, wild_props; kwargs...)
end

componentb(children::Any; kwargs...) = componentb(;kwargs..., children = children)
componentb(children_maker::Function; kwargs...) = componentb(children_maker(); kwargs...)

