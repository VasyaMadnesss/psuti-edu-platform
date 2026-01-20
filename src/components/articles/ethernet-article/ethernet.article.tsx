import { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Link,
  Chip,
  Box,
  Divider,
  Alert,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanIcon from "@mui/icons-material/Lan";
import CableIcon from "@mui/icons-material/Cable";
import SpeedIcon from "@mui/icons-material/Speed";
import HistoryIcon from "@mui/icons-material/History";

export const Ethernet = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleAccordionChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
      <Container sx={{ py: 4 }}>
        {/* Заголовок статьи */}
        <Paper elevation={12} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
          <Box display="flex" alignItems="center" gap={2} mb={2}>
            <LanIcon fontSize="large" color="primary" />
            <Typography variant="h3" component="h1" gutterBottom>
              Ethernet
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component={"p"}
          >
            <strong>Ethernet</strong> — семейство технологий пакетной передачи
            данных для проводных компьютерных и промышленных сетей. Это самый
            распространенный протокол для построения локальных (LAN) и городских
            сетей (MAN), работающий на канальном и физическом уровне модели OSI.
          </Typography>
          <Box display="flex" gap={1} flexWrap="wrap" sx={{ marginTop: 2 }}>
            <Chip
              icon={<HistoryIcon />}
              label="С 1973 года"
              variant="outlined"
            />
            <Chip
              icon={<SpeedIcon />}
              label="10 Мбит/с – 400 Гбит/с"
              variant="outlined"
            />
            <Chip
              icon={<CableIcon />}
              label="Витая пара, оптика, коаксиал"
              variant="outlined"
            />
          </Box>
        </Paper>

        {/* Основное содержание в карточках */}
        <Paper elevation={12} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <HistoryIcon /> История и развитие
          </Typography>
          <Typography component={"p"}>
            Технологию Ethernet изобрел Роберт Меткалф в 1973 году в
            исследовательском центре Xerox PARC. Первоначальная цель — соединить
            компьютеры с лазерным принтером. В 1980 году компании DEC, Intel и
            Xerox выпустили первый стандарт (DIX), а в 1983 году IEEE утвердил
            стандарт <strong>IEEE 802.3</strong>, который стал основой для всех
            последующих версий.
          </Typography>
          <Typography component={"p"}>
            За 50 лет Ethernet прошел путь от экспериментальной сети со
            скоростью 2.94 Мбит/с на коаксиальном кабеле до технологии,
            способной передавать 400 Гбит/с по оптическому волокну, и остается
            «сердцем» проводного интернета.
          </Typography>
          <Alert severity="info" sx={{ mt: 2 }}>
            <strong>Интересный факт:</strong> Название «Ethernet» (эфирная сеть)
            отражало первоначальный принцип работы: передача данных одним узлом
            для всех, подобно радиовещанию в эфире.
          </Alert>
        </Paper>

        {/* Ключевые принципы работы */}
        <Paper elevation={12} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            📡 Как работает Ethernet?
          </Typography>
          <Typography component={"p"}>
            Основной метод доступа в классическом Ethernet —{" "}
            <strong>CSMA/CD</strong> (множественный доступ с контролем несущей и
            обнаружением коллизий). Устройство «слушает» линию и начинает
            передачу, если она свободна. При одновременной отправке данных
            возникает коллизия, и передача повторяется после случайной паузы.
          </Typography>
          <Typography component={"p"}>
            Данные передаются <strong>кадрами (фреймами)</strong>. Стандартный
            кадр включает преамбулу, MAC-адреса отправителя и получателя, данные
            (от 46 до 1500 байт) и контрольную сумму (CRC).
          </Typography>
          <Box bgcolor="action.hover" sx={{ p: 3, borderRadius: 1, my: 2 }}>
            <Typography variant="h6" gutterBottom>
              🖧 Уровень в модели OSI
            </Typography>
            <Typography>Ethernet работает на двух нижних уровнях:</Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="1. Физический (Physical): определяет тип кабеля, разъемы, сигналы." />
              </ListItem>
              <ListItem>
                <ListItemText primary="2. Канальный (Data Link): делится на LLC (управление) и MAC (управление доступом, адресация)." />
              </ListItem>
            </List>
            <Typography variant="body2" color="text.secondary">
              Выше этих уровней работают протоколы IP, TCP, HTTP и другие.
            </Typography>
          </Box>
        </Paper>

        {/* Таблица стандартов в аккордеоне */}
        <Paper
          elevation={12}
          sx={{ mb: 4, borderRadius: 2, overflow: "hidden" }}
        >
          <Accordion
            expanded={expanded === "standards"}
            onChange={handleAccordionChange("standards")}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                variant="h5"
                component="h3"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <SpeedIcon /> Эволюция стандартов и скоростей
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"p"}>
                Основная классификация проводится по скорости передачи и среде
                (кабелю). Название стандарта часто имеет вид:{" "}
                <strong>{`<Скорость>Base<Код кабеля>`}</strong> (например,
                10Base-T).
              </Typography>

              <Accordion sx={{ mb: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>
                    <strong>Ethernet (10 Мбит/с)</strong> — первый массовый
                    стандарт.
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List dense>
                    <ListItem>
                      <ListItemText primary="10Base5 (1983): «Толстый» коаксиал, до 500 м." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="10Base2 (1985): «Тонкий» коаксиал, до 185 м." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="10Base-T (1990): Витая пара (UTP Cat 3/5), до 100 м, топология «звезда»." />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ mb: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>
                    <strong>
                      Fast Ethernet (100 Мбит/с, IEEE 802.3u, 1995)
                    </strong>{" "}
                    — увеличение скорости в 10 раз.
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List dense>
                    <ListItem>
                      <ListItemText primary="100Base-TX: Витая пара Cat 5, 2 пары, до 100 м." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="100Base-FX: Оптическое волокно, до 2 км." />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>
                    <strong>Gigabit Ethernet (1 Гбит/с) и выше</strong> — для
                    магистралей и ЦОД.
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List dense>
                    <ListItem>
                      <ListItemText primary="1000Base-T (IEEE 802.3ab, 1999): Витая пара Cat 5e/6, до 100 м." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="10GBase-T (IEEE 802.3an, 2006): Витая пара Cat 6a/7, до 100 м, 10 Гбит/с." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Современные стандарты: 40GbE, 100GbE, 400GbE (IEEE 802.3bs) — преимущественно оптика." />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>
        </Paper>

        {/* Преимущества и роль сегодня */}
        <Paper elevation={12} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            💎 Преимущества и роль сегодня
          </Typography>
          <Typography component={"p"}>
            <strong>Почему Ethernet доминирует?</strong>
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Скорость и надежность: Проводное соединение обеспечивает максимальную скорость и стабильность, меньшие задержки по сравнению с Wi-Fi." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Безопасность: Физический доступ к кабелю сложнее перехватить, чем радиосигнал." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Экономичность и обратная совместимость: Оборудование разных поколений работает вместе, инфраструктура развивается." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Гибкость: От локальных сетей до промышленного Ethernet (с жесткими требованиями к времени и надежности)" />
            </ListItem>
          </List>
          <Divider sx={{ my: 3 }} />
          <Typography variant="h6" gutterBottom>
            Ethernet vs. Wi-Fi
          </Typography>
          <Typography component={"p"}>
            Хотя Wi-Fi удобен для мобильных устройств,{" "}
            <strong>Ethernet остается незаменимым</strong> для стационарных ПК,
            серверов, игровых консолей, умных телевизоров и сетевого backbone,
            где критичны скорость (гигабитные и выше) и стабильность соединения.
          </Typography>
          <Alert severity="success" sx={{ mt: 2 }}>
            Технология продолжает развиваться. Активно ведутся работы над
            стандартами для скоростей 800 Гбит/с и 1.6 Тбит/с.
          </Alert>

          {/* Блок с дополнительными ресурсами */}
          <Box sx={{ mt: 4, p: 3, bgcolor: "action.hover", borderRadius: 1 }}>
            <Typography variant="h6" gutterBottom>
              📚 Дополнительные ресурсы
            </Typography>
            <List dense>
              <ListItem>
                <Link
                  href="https://standards.ieee.org/ieee/802.3/10519/"
                  target="_blank"
                  rel="noopener"
                >
                  Официальный стандарт IEEE 802.3
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://ru.wikipedia.org/wiki/Ethernet"
                  target="_blank"
                  rel="noopener"
                >
                  Статья об Ethernet в Википедии
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://habr.com/ru/articles/208202/"
                  target="_blank"
                  rel="noopener"
                >
                  Шпаргалка по стандартам Ethernet (Habr)
                </Link>
              </ListItem>
            </List>
          </Box>
        </Paper>

        {/* Подвал статьи */}
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 6 }}
        >
          Статья создана для демонстрации использования MUI Components.
          Информация собрана из открытых источников. Последнее обновление:
          январь 2026.
        </Typography>
      </Container>
    </>
  );
};
