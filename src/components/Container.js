import { Wrapper, WorkZone } from "./ContainerStyledComponents";

const Container = ({children=<></>, backgroundColor=""}) => {
    return (
        <Wrapper backgroundColor={backgroundColor}>
            <WorkZone backgroundColor={backgroundColor}>
                {children}
            </WorkZone>
        </Wrapper>
    )
}

export default Container;