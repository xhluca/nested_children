# AUTO GENERATED FILE - DO NOT EDIT

componentA <- function(children=NULL, id=NULL, a=NULL, b=NULL, c=NULL) {
    
    props <- list(children=children, id=id, a=a, b=b, c=c)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ComponentA',
        namespace = 'nested_children',
        propNames = c('children', 'id', 'a', 'b', 'c'),
        package = 'nestedChildren'
        )

    structure(component, class = c('dash_component', 'list'))
}
