import { Wrapper, TopZone, TitleZone, AvatarImage, UserName, UserTitle, CardTitle, CardText } from "./CardStyledComponents";


const Card = ({ avatarImg = "", userName = "", userTitle = "", postTitle = "", postContent = "", backgroundColor = "", cardWidth = 1 }) => {
    return (
        <Wrapper backgroundColor={backgroundColor} cardWidth={cardWidth}>
            <TopZone>
                <AvatarImage img={avatarImg} src={avatarImg} />
                <TitleZone>
                    <UserName>
                        {userName}
                    </UserName>
                    <UserTitle>
                        {userTitle}
                    </UserTitle>
                </TitleZone>
            </TopZone>
            <CardTitle>
                {postTitle}
            </CardTitle>
            <CardText>
                {postContent}
            </CardText>
        </Wrapper>
    )
}

export default Card;