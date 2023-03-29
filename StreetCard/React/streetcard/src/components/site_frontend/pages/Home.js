import Navbar from '../components/Navbar';
import Slideshow from '../components/Slideshow';

function Home() {
    return (
        <div className='pageWrapper'>
            <div className='top'>
                <Navbar />
                <Slideshow />
            </div>
            <div className="home" style={{ color: `#fff7de` }}>
                <div className='homeHeader'>
                    <h2>StreetCard</h2>
                    <h3> Modern Streamlining of Benefits Access for Homeless Persons </h3>
                </div>
            
                <div className='homeContent'>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat ligula, pretium vitae eleifend quis, pretium sed justo. Nulla et urna sed sapien egestas feugiat. Phasellus at ultrices metus.
                        Sed et egestas elit. Aenean aliquet nisi in leo blandit tristique. Donec urna turpis, volutpat ac est id, fermentum ultricies ipsum. Aliquam sollicitudin sem eu tortor fermentum, quis pellentesque orci lobortis.
                        Etiam volutpat fermentum ex ut luctus. <br></br><br></br>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat ligula, pretium vitae eleifend quis, pretium sed justo. Nulla et urna sed sapien egestas feugiat. Phasellus at ultrices metus.
                        Sed et egestas elit. Aenean aliquet nisi in leo blandit tristique. Donec urna turpis, volutpat ac est id, fermentum ultricies ipsum. Aliquam sollicitudin sem eu tortor fermentum, quis pellentesque orci lobortis.
                        Etiam volutpat fermentum ex ut luctus. <br></br><br></br>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat ligula, pretium vitae eleifend quis, pretium sed justo. Nulla et urna sed sapien egestas feugiat. Phasellus at ultrices metus.
                        Sed et egestas elit. Aenean aliquet nisi in leo blandit tristique. Donec urna turpis, volutpat ac est id, fermentum ultricies ipsum. Aliquam sollicitudin sem eu tortor fermentum, quis pellentesque orci lobortis.
                        Etiam volutpat fermentum ex ut luctus.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Home;