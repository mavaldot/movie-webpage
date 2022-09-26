import { NavItem, NavLink, Nav, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { useEffect, useState } from "react";
import { getGenres } from "../util/requests";

const MovieTabs = (props) => {

    const [activeTab, setActiveTab] = useState('popular');
    const [dropdown, setDropdown] = useState(false);
    const [genres, setGenres] = useState([]);

    const clickTab = (str) => {
        if (activeTab === str) return;
        props.setSort(str);
        setActiveTab(str);
    };

    const clickGenre = (genre) => {
        props.setSort('genre');
        props.setGenre(genre);
        setActiveTab('genre');
    }
    
    const toggle = () => {
        setDropdown(!dropdown);
    };

    useEffect(() => {
        const getGenreList = async () => {
            const res = await getGenres();
            setGenres(res.genres);
            console.log(res.genres);
        };
         const res = getGenreList();

    }, []);

    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink active={activeTab === 'popular'} onClick={() => clickTab('popular')} style={{ cursor: 'pointer' }}>
                        Popular
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink active={activeTab === 'top'} onClick={() => clickTab('top')} style={{ cursor: 'pointer' }}>
                        Top Rated
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink active={activeTab === 'latest'} onClick={() => clickTab('latest')} style={{ cursor: 'pointer' }}>
                        Latest
                    </NavLink>
                </NavItem>
                    <Dropdown nav isOpen={dropdown} toggle={toggle}>
                        <DropdownToggle nav caret>
                        Genres
                        </DropdownToggle>
                        <DropdownMenu>
                            {genres.map((genre, index) => (
                                                                <div key={index}>
                            <DropdownItem onClick={() => {clickGenre(genre.id)}}>{genre.name}</DropdownItem>
                                                            </div>
                            )   
                            )}
                        </DropdownMenu>
                    </Dropdown>
            </Nav>

        </div>

    )
};

export default MovieTabs;