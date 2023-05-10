import './App.css';
import React from 'react';
import Prenavbar from './components/prenavbar';
import Navbar from './components/navbar.jsx';
import Slider from './components/slider.jsx';
import Offers from './components/offers.jsx';
import HotAccessoriesMenu from './components/hotaccessoriesmenu.jsx';
import ProductReviews from './components/productreview.jsx';
import Videos from './components/videos.jsx';
import Footer from './components/footer.jsx';
import HotAccessories from './components/hotaccessories';
import StarProduct from './components/starProduct.jsx';
import Heading from './components/heading.jsx';
import Banner from './components/banner.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import data from './data/data.json'
function App() {
  return (
    <Router>
      <Prenavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text='STAR PRODUCT' />
      <StarProduct starProduct={data.starProduct} />
      <Heading text='HOT ACCESSORIES' />
      <HotAccessoriesMenu />
      <Routes>
        <Route path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
        <Route path="/smartDevice" element={<HotAccessories music={data.hotAccessories.smartDevice} musicCover={data.hotAccessoriesCover.smartDevice} />} />
        <Route path="/home" element={<HotAccessories music={data.hotAccessories.home} musicCover={data.hotAccessoriesCover.home} />} />
        <Route path="/lifestyle" element={<HotAccessories music={data.hotAccessories.lifeStyle} musicCover={data.hotAccessoriesCover.lifeStyle} />} />
        <Route path="/mobileAccessories" element={<HotAccessories music={data.hotAccessories.mobileAccessories} musicCover={data.hotAccessoriesCover.mobileAccessories} />} />
      </Routes>

      <Heading text='PRODUCT REVIEWS' />
      <ProductReviews productReviews={data.productReviews} />
      <Heading text='VIDEOS' />
      <Videos videos={data.videos} />
      <Heading text='IN THE PRESS' />
      <Banner end={data.banner.end} />
      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
