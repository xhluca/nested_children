# AUTO GENERATED FILE - DO NOT EDIT

componentB <- function(children=NULL, id=NULL, a=NULL, b=NULL, c=NULL, d=NULL, e=NULL) {
    
    props <- list(children=children, id=id, a=a, b=b, c=c, d=d, e=e)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ComponentB',
        namespace = 'nested_children',
        propNames = c('children', 'id', 'a', 'b', 'c', 'd', 'e'),
        package = 'nestedChildren'
        )

    structure(component, class = c('dash_component', 'list'))
}
