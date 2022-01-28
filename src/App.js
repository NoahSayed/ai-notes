import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Fab } from '@material-ui/core';


class TextArea extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newContent: "",
		}
		this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
		//this.handleImageChange = this.handleImageChange.bind(this);
		//this.imageIsLoaded = this.imageIsLoaded.bind(this);
		//this.detectText = this.detectText.bind(this);
	}

	handleTextAreaChange(e) {
		//if (!e.target.value || e.target.value.split('\n' < 1)) {
			this.setState({
				newContent: e.target.value
			});
		//}
		this.scrollTop = this.scrollHeight;
	}
	/*
	
	
	
	*/
	render() {
		return (
			<textarea type="text"
				className="TextArea"
				name="textarea"
				value={this.state.newContent}
				placeholder="Start typing here..."
				onChange={this.handleTextAreaChange}
			/>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newContent: "",
		}
		this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
		this.handleImageChange = this.handleImageChange.bind(this);
		this.imageIsLoaded = this.imageIsLoaded.bind(this);
		this.detectText = this.detectText.bind(this);
	}
	
	handleTextAreaChange(e) {
		//if (!e.target.value || e.target.value.split('\n' < 1)) {
			this.setState({
				newContent: e.target.value
			});
		//}
		this.scrollTop = this.scrollHeight;
	}
	
	handleImageChange(e) {
		if (e.target.files && e.target.files[0]) {
			var img = document.getElementById("TextImage");
			img.onload = this.imageIsLoaded;
			img.src = URL.createObjectURL(e.target.files[0]);
		}
	}
	
	imageIsLoaded(e) {
		this.detectText(e.path[0]);
	}
	
	async detectText(image) {
		if (window.TextDetector) {
			var textDetector = new window.TextDetector();
			var passage = "";

			textDetector.detect(image)
			.then(detectedTextBlocks => {
				for (const textBlock of detectedTextBlocks) {
					passage += " " + textBlock.rawValue;
					console.log(textBlock.rawValue);
				}
				console.log(passage);
				this.setState({newContent: this.state.newContent + "\n" + passage.trim() + "\n"});
				//this.setState({textAreaContent: passage});
			}).catch((err) => {
				console.error("Text Detection Failed");
				console.error(err);
			});
		}
	}
	
	render() {
		return (
			<div className="App">
				<div className="AppHeader">
					<i>AI Notes</i>
				</div>
				<div className="AppBody">
					<textarea type="text"
						className="TextArea"
						name="textarea"
						value={this.state.newContent}
						placeholder="Start typing here..."
						onChange={this.handleTextAreaChange}
					/>
					
					<img id="TextImage" className="TextImage"/>

					<div className="AddFab">
						<Fab>
							<label>
								<input type="file" className="FabInput" onChange={this.handleImageChange}/>
								<div className="AddIcon">+</div>
							</label>
						</Fab>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
