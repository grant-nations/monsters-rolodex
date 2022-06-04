import './App.css';
import {Component} from "react";
import {CardList} from "./components/CardList/CardList";
import {SearchBox} from "./components/SearchBox/SearchBox";
import {getData} from "./utils/data.utils";

export type Monster = {
    id: string;
    name: string;
    email: string;
}

type AppState = {
    monsters: Monster[];
    searchField: string;
}

class App extends Component<AppState> {

    state: AppState = {
        monsters: [],
        searchField: ""
    }

    componentDidMount() {
        getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
            .then(users => this.setState({monsters: users}))
    }
    render() {

        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder={"Search monsters"}
                    handleChange={(e) => this.setState({searchField: e.target.value})}
                />
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
