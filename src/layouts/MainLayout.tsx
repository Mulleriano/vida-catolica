import { Outlet, Link } from "react-router-dom";
import { useRouteName } from "../hooks/useRouteName";
import { useState } from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HolySpiritIcon from "../assets/holy-spirit.png";
import RosaryIcon from "../assets/rosary.png";
import LiturgyIcon from "../assets/liturgy.png";
import "./MainLayout.css";


export default function MainLayout() {
  
  const [value, setValue] = useState(0);

  const name = useRouteName();

  return (
    <div>
      <header>
        <h1 className="text-2xl font-bold">{name}</h1>

        <nav></nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <BottomNavigation
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
          }}
          sx={{
            width: "100%",
            height: "100%",
            alignItems: "end",
            backgroundColor: "transparent",
          }}
        >
          <BottomNavigationAction
            label="Home"
            component={Link}
            to="/"
            icon={
              <img
                src={HolySpiritIcon}
                alt="Espírito Santo"
                style={{ width: 30, height: 30 }}
              />
            }
          />
          <BottomNavigationAction
            id="rosary"
            label="Terço"
            component={Link}
            to="/rosary"
            icon={
              <img
                src={RosaryIcon}
                alt="Terço"
                style={{ width: 50, height: 50, marginRight: 5 }}
              />
            }
          />
          <BottomNavigationAction
            label="Liturgia"
            component={Link}
            to="/liturgy"
            icon={
              <img
                src={LiturgyIcon}
                alt="Liturgia"
                style={{ width: 30, height: 30 }}
              />
            }
          />
        </BottomNavigation>
      </footer>
    </div>
  );
}
