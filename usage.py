import nested_children as nc
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    nc.ComponentA(
        a='hello', b='world', c='foo',
        children=[
            nc.ComponentB(
                d='potato', e='wheat',
                children=[
                    nc.ComponentC(
                        f='car', g='motorcycle',
                    )
                ]
            )
        ]
    )
])



if __name__ == '__main__':
    app.run_server(debug=True)
