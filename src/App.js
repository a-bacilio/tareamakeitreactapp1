import Card from "./components/Card";
import Container from "./components/Container";
import { ScreenFull } from "./components/ScreenFull";
import { AppWrapper, CardHolder, SubCardHolder } from "./components/AppStyledComponents";

import imgDaniel from "./images/image-daniel.jpg";
import imgJonathan from "./images/image-jonathan.jpg";
import imgJeannette from "./images/image-jeanette.jpg";
import imgKira from "./images/image-kira.jpg";
import imgPatrick from "./images/image-patrick.jpg";




function App() {
  return (
    <div className="App">
      <ScreenFull>
        <Container>
          <AppWrapper>
            <CardHolder>
              <SubCardHolder>
                <Card
                  avatarImg={imgDaniel}
                  userName={"Daniel Clifford"}
                  userTitle={"Verified Graduate"}
                  postTitle={"I received a job offer mid-course, and the subjects I learned were current, if not more so,           in the company I joined. I honestly feel I got every penny’s worth."}
                  postContent={`“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
          transition and have heard some people who had an amazing experience here. I signed up 
          for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
          The next 12 weeks was the best - and most grueling - time of my life. Since completing 
          // the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup."`}
                  backgroundColor={"var(--color1)"}
                  cardWidth={2}
                />
                <Card
                  avatarImg={imgJonathan}
                  userName={"Jonathan Walters"}
                  userTitle={"Verified Graduate"}
                  postTitle={"The team was very supportive and kept me motivated"}
                  postContent={`“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
          for a big company. This was one of the best investments I’ve made in myself. ”`}
                  backgroundColor={"var(--color2)"}
                  cardWidth={1}
                />
                <Card
                  avatarImg={imgJeannette}
                  userName={"Jeanette Harmon"}
                  userTitle={"Verified Graduate"}
                  postTitle={"An overall wonderful and rewarding experience"}
                  postContent={`“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
          while doing something I love. ”`}
                  backgroundColor={""}
                  cardWidth={1}
                />
                <Card
                  avatarImg={imgPatrick}
                  userName={"Patrick Abrams"}
                  userTitle={"Verified Graduate"}
                  postTitle={"Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy."}
                  postContent={`“ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
          gave me the confidence necessary to be able to go out in the world and present myself as a capable 
          junior developer. The standard is above the rest. You will get the personal attention you need from 
          an incredible community of smart and amazing people. ”`}
                  backgroundColor={"var(--color3)"}
                  cardWidth={2}
                />
              </SubCardHolder>
              <Card
                avatarImg={imgKira}
                userName={"Kira Whittle"}
                userTitle={"Verified Graduate"}
                postTitle={"Such a life-changing experience. Highly recommended!"}
                postContent={`“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
          professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
          student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
          did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
          project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
          could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
          experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
          100% recommend! ”`}
                backgroundColor={""}
                cardWidth={1}
              />
            </CardHolder>
          </AppWrapper>




        </Container>
      </ScreenFull>
    </div>
  );
}

export default App;
