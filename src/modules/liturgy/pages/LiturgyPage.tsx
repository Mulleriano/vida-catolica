import React from "react";
import { useDailyLiturgy } from "../hooks/useDailyLiturgy";
import { Box, Tabs, Tab } from "@mui/material";
import getLiturgyHexColor from "../utils/getLiturgyHexColor";

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Home() {
  const { liturgy, loading } = useDailyLiturgy();
  const [value, setValue] = React.useState(0);
  const tabs = [
    {
      label: "1ª Leitura",
      content: liturgy?.leituras.primeiraLeitura?.[0],
    },
    {
      label: "Salmo",
      content: liturgy?.leituras.salmo?.[0],
    },
    {
      label: "Evangelho",
      content: liturgy?.leituras.evangelho?.[0],
    },
  ];

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (loading || !liturgy) {
    return <p>Carregando liturgia...</p>;
  }

  return (
    <div className="p-6">
      <button
        className="w-10 h-10 rounded-full shadow-(--box-shadow) absolute top-5 right-5"
        style={{ backgroundColor: getLiturgyHexColor(liturgy.cor) }}
      ></button>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          className="sticky top-0 bg-(--secondary-color)"
        >
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} />
          ))}
        </Tabs>

        <div className="overflow-y-auto">
          {tabs.map((tab, index) => (
            <TabPanel key={index} value={value} index={index}>
              {!tab.content ? (
                <p>Leitura não disponível</p>
              ) : "refrao" in tab.content ? (
                <>
                  <h5>{tab.content.referencia}</h5>
                  <h3>{tab.content.refrao}</h3>
                  <p className="whitespace-pre-line">{tab.content.texto}</p>
                </>
              ) : (
                <>
                  <h3>{tab.content.titulo}</h3>
                  <h5>{tab.content.referencia}</h5>
                  <p className="whitespace-pre-line">{tab.content.texto}</p>
                </>
              )}
            </TabPanel>
          ))}
        </div>
      </Box>
    </div>
  );
}
