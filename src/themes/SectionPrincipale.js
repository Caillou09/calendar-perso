import styled from 'styled-components'


const SectionPrincipale = styled.div`
  display : flex;
  flex-direction : column;
  min-height : 90vh;
  background-color : white;
  border-radius : 4px;


  @media (min-width : 768px) {
    display : grid;

    grid-template-columns : 35% 60%;
    grid-template-rows : 40px auto;
    column-gap : 40px;
    max-width : 75vw;
    justify-items : center;
    margin : auto;
    padding : 20px 20px 20px 20px;
    box-shadow:
     0 2.8px 2.2px rgba(0, 0, 0, 0.034),
     0 6.7px 5.3px rgba(0, 0, 0, 0.048),
     0 12.5px 10px rgba(0, 0, 0, 0.06),
     0 22.3px 17.9px rgba(0, 0, 0, 0.072),
     0 41.8px 33.4px rgba(0, 0, 0, 0.086),
     0 100px 80px rgba(0, 0, 0, 0.12)
    ;
  }

`

export default SectionPrincipale
