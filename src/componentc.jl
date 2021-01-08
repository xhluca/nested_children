# AUTO GENERATED FILE - DO NOT EDIT

export componentc

"""
    componentc(;kwargs...)
    componentc(children::Any;kwargs...)
    componentc(children_maker::Function;kwargs...)


A ComponentC component.
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
- `f` (String; optional): A
- `g` (String; optional): A
"""
function componentc(; kwargs...)
        available_props = Symbol[:children, :id, :a, :b, :c, :d, :e, :f, :g]
        wild_props = Symbol[]
        return Component("componentc", "ComponentC", "nested_children", available_props, wild_props; kwargs...)
end

componentc(children::Any; kwargs...) = componentc(;kwargs..., children = children)
componentc(children_maker::Function; kwargs...) = componentc(children_maker(); kwargs...)

