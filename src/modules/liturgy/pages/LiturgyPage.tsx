import React from "react";
import { useDailyLiturgy } from "../hooks/useDailyLiturgy";
import { Box, Tabs, Tab } from "@mui/material";

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
  const [tabValue, setTabValue] = React.useState(0);
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
    setTabValue(newValue);
  };

  if (loading || !liturgy) {
    return <p>Carregando liturgia...</p>;
  }

  if (error) {
    alert("Erro ao carregar liturgia. Por favor, tente novamente mais tarde.");
  }

  return (
    <div className="max-w-7xl">
      <div className="flex justify-between gap-2 items-center">
        <h2 className="text-2xl font-bold mb-4">{liturgy.celebracao}</h2>
        <button
          className="font-bold px-4 py-2 rounded shadow-(--box-shadow)"
          style={{
            backgroundColor: liturgy.cor.hex,
            color: liturgy.cor.hexTexto,
          }}
        >
          {liturgy.cor.nome}
        </button>
      </div>
      <Box sx={{ width: "100%", height: "100%", marginTop: "1rem" }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          centered
          textColor="secondary"
          indicatorColor="secondary"
          className="sticky top-0 bg-(--secondary-color) rounded-xl"
        >
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} />
          ))}
        </Tabs>

        <div className="overflow-y-auto">
          {tabs.map((tab, index) => (
            <TabPanel
              key={index}
              value={tabValue}
              index={index}
            >
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
