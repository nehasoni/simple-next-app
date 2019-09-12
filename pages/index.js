import 'glamor/reset'
import Carousel from "react-anim-carousel";
import styled from "styled-components";

const Header = styled.div`
  font-size: 22px;
  font-weight: 500;
  height: 60px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-bottom: 1px solid rgba(0, 0, 0, 0.19);
  position: sticky;
  top: 0;
  margin-bottom: 40px;
  padding: 15px;
  box-sizing: border-box;
  z-index: 2;
  background-color: aliceblue;
`;
const Seperator = styled.div`
  font-size: 20px;
  padding: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.19);
  border-top: 1px solid rgba(0, 0, 0, 0.19);
  margin: 40px 0;
  background-color: aliceblue;
  text-align: center;
`;

const basicFixture = [
  {
    id: 1,
    url: "https://cdn.pixabay.com/photo/2019/08/06/02/16/landscape-4387209_1280.jpg"
  },
  {
    id: 2,
    url: "https://cdn.pixabay.com/photo/2019/09/04/20/34/plantation-4452538_1280.jpg"
  },
  {
    id: 3,
    url: "https://cdn.pixabay.com/photo/2019/08/12/13/14/port-4401223_1280.jpg"
  },
  {
    id: 4,
    url: "https://cdn.pixabay.com/photo/2019/09/05/07/23/norway-4453338__480.jpg"
  },
  {
    id: 5,
    url: "https://cdn.pixabay.com/photo/2019/09/03/13/13/landscape-4449408__480.jpg"
  }
]


const Index = () => (
  <div>
    <Header>React carousel</Header>
    <Carousel>
      {basicFixture.map(image => {
        return (<img key={image.id} src={image.url} />)
      })}
    </Carousel>
    <Seperator>Another one</Seperator>
    <Carousel>
      {basicFixture.map(image => {
        return (<img key={image.id} src={image.url} />)
      })}
    </Carousel>
  </div>
);

export default Index;