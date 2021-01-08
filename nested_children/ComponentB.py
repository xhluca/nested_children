# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ComponentB(Component):
    """A ComponentB component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): Children
- id (string; optional): The ID used to identify this component in Dash callbacks.
- a (string; optional): A
- b (string; optional): A
- c (string; optional): A
- d (string; optional): A
- e (string; optional): A"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, a=Component.UNDEFINED, b=Component.UNDEFINED, c=Component.UNDEFINED, d=Component.UNDEFINED, e=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'a', 'b', 'c', 'd', 'e']
        self._type = 'ComponentB'
        self._namespace = 'nested_children'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'a', 'b', 'c', 'd', 'e']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ComponentB, self).__init__(children=children, **args)
