import styled from "styled-components";



const ItemContainer = styled.div`

`;

const TopSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    margin-top: 5px;
    font-weight:  bold;
        .discount{
            color: #452CDD;
        }
`;

const BottomSection = styled.div`
    text-align: right;
        .subtitle{
            text-align: left;
        }
`;

const Image = styled.img`
    width: 264px; 
    height: 210px;
    border-radius: 10px;
`;


function Item ({ item }) {
    if (item.type === 'Product') {
        return (
        <ItemContainer>
            <Image src={item.image_url} alt="product" />
            <TopSection>
                <div className="title">{item.title}</div>
                <div className="discount">{item.discountPercentage}%</div>
            </TopSection>
            <BottomSection>
                <div className="price">{item.price}원</div>
            </BottomSection>
        </ItemContainer>
        );
    } else if (item.type === 'Category') {
        return (
        <ItemContainer>
            <Image src={item.image_url} alt="category"/>
            <TopSection>
                <div className="title"># {item.title}</div>
            </TopSection>
        </ItemContainer>
        );
    } else if (item.type === 'Brand') {
        return (
        <ItemContainer>
            <Image  src={item.brand_image_url} alt="brand" />
            <TopSection>
                <div className="title">{item.brand_name}</div>
                <div className="follower">관심 고객수</div>
            </TopSection>
            <BottomSection>
                <div className="follwer-number">{item.follower}</div>
            </BottomSection>
        </ItemContainer>
        );
    } else if (item.type === 'Exhibition') {
        return (
        <ItemContainer>
            <Image src={item.image_url} alt="exhibition" />
            <TopSection>
                <div className="title">{item.title}</div>
            </TopSection>
            <BottomSection>
                <div className="subtitle">{item.sub_title}</div>
            </BottomSection>
            
        </ItemContainer>
        );
    }
}

export default Item;
