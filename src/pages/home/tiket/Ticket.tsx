import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ConfirmationNumberTwoToneIcon from "@mui/icons-material/ConfirmationNumberTwoTone";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import Grid from "@mui/material/Grid/Grid";
import Button from "@mui/material/Button/Button";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  return (
    <Box sx={{ width: 500 }}>
      <Tooltip title="" placement="right-end">
        <Grid container justifyContent="center">
          <Grid item>
            <div>
              <div>
                <Button variant="text" color="success">
                  Tiket apuestas
                </Button>
                <Button variant="text" color="success">
                  Cierre apuestas
                </Button>
              </div>
              <div>
                <BottomNavigation
                  showLabels
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                >
                  <BottomNavigationAction
                    label="Simple"
                    icon={<ConfirmationNumberTwoToneIcon />}
                  />
                  <BottomNavigationAction
                    label="Combinada"
                    icon={<ConfirmationNumberIcon />}
                  />
                </BottomNavigation>
              </div>
              <div>
                Saldo disponible
                <input type="checkbox" name="Saldo disponible" id="" />
                Free play
                <input type="checkbox" name="Free play" id="" />
              </div>
              <div className="infoTiket"></div>
            </div>
          </Grid>
        </Grid>
      </Tooltip>
    </Box>
  );
}
