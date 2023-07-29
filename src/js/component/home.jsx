import React from "react";
import Button from "./button"
import Card from "./card";
import Nav from "./nav";
import Footer from "./footer";
import Jumbotron from "./jumbotron";
import Row from "./row";



//create your first component
const Home = () => {



	return (
		<>
			<div className="text-cent">
				<Nav />
				<Jumbotron />
				<Row />


				<Footer />
			</div>

		</>


	);
};

export default Home;
