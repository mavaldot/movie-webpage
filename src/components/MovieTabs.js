import { NavItem, NavLink, Nav } from "reactstrap";
import { useState } from "react";

const MovieTabs = (props) => {

    const [activeTab, setActiveTab] = useState('popular');

    const clickTab = (str) => {
        if (activeTab === str) return;
        props.setSort(str);
        setActiveTab(str);
    }

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
            </Nav>

        </div>

    )
};

export default MovieTabs;