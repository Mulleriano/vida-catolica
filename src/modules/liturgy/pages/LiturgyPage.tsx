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
  const { liturgy, loading, error } = useDailyLiturgy();
  const [value, setValue] = React.useState(0);
  const tabs = [
    {
      label: "1ª Leitura",
      content: liturgy?.leitura,
    },
    {
      label: "Salmo",
      content: liturgy?.salmo,
    },
    {
      label: "Evangelho",
      content: liturgy?.evangelho,
    },
  ];

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (loading || !liturgy) {
    return <p>Carregando liturgia...</p>;
  }
  
  
  if(error) {
    alert("Erro ao carregar liturgia. Por favor, tente novamente mais tarde.");
  }
  
  return (
    <div className="p-6">
      <button
        className="w-10 h-10 rounded-full shadow-(--box-shadow) absolute top-5 right-5"
        style={{ backgroundColor: getLiturgyHexColor(liturgy.cor) }}
      ></button>
      <h2 className="text-2xl font-bold mb-4">{liturgy.celebracao}</h2>
      <Box sx={{ width: "100%", height: "100%", marginTop: "1rem" }}>
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
