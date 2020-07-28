import React from 'react';
import { Card, Container} from 'reactstrap';

export default class FetchPicture extends React.Component {
    state = {
      loading: true,
      dishes: null
    };
  
    async componentDidMount() {
      this.fetchPicture();
    }

    fetchPicture = async () => {
      const url = "https://www.themealdb.com/api/json/v1/1/random.php";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ pic: data.meals[0], loading: false });
    }

    render() {
        if (this.state.loading) {
          return <div><i class="fa fa-spinner fa-spin fa-5x fa-fw"></i>
          <span class="sr-only">Loading...</span></div>;
        }
    
        if (!this.state.pic) {
          return <div>didn't get a pic</div>;
        }
    
        return (
            
        <Container>
                    <Card body>
                     <img src={this.state.pic.strMealThumb} />  
                    </Card>
        </Container>
        );
      }
    }
