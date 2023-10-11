// With God's Help

import {
  Button,
  RadioGroup,
  TextField,
  Typography,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useStorage } from "../hooks/useStorage";
import { useState } from "react";

const Targil2 = () => {
  const [storageName, setStorageName] = useState("Local Storage");
  const ULS = useStorage();
  return (
    <>
      <FormControl>
        <FormLabel>
          <RadioGroup
            onChange={(e) => {
              if (e.target.value === "1") {
                setStorageName("Local Storage");
                ULS.setStorage(localStorage);
              } else {
                setStorageName("Session Storage");
                ULS.setStorage(sessionStorage);
              }
            }}
          >
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="Local Storage"
            ></FormControlLabel>
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="Session Storage"
            ></FormControlLabel>
          </RadioGroup>
        </FormLabel>
      </FormControl>

      <div>
        <Typography variant="h3"> {storageName}</Typography>
        <Typography variant="h5"> Save New Item</Typography>
        <TextField
          label="Key"
          onChange={(e) => {
            ULS.setKey(e.target.value);
          }}
        />
        <TextField
          label="Value"
          onChange={(e) => {
            ULS.setValue(e.target.value);
          }}
        />
        <Button onClick={ULS.saveItem} variant="contained">
          Save Item
        </Button>
      </div>
      <div>
        <Typography variant="h5"> Delete Item</Typography>
        <TextField
          label="Key"
          onChange={(e) => {
            ULS.setKey(e.target.value);
          }}
        />
        <Button onClick={ULS.deleteItem} variant="contained">
          Delete Item
        </Button>
      </div>
      <div>
        <Typography variant="h5"> Get Item</Typography>
        <TextField
          label="Key"
          onChange={(e) => {
            ULS.setKey(e.target.value);
          }}
        />
        <Button onClick={ULS.getItem} variant="contained">
          Get Item
        </Button>
        <div>{JSON.stringify(ULS.item)}</div>
      </div>
      <div>
        <Typography variant="h5"> Get All Data</Typography>
        <Button onClick={ULS.getAllData} variant="contained">
          Get All Data
        </Button>
        <div>{JSON.stringify(ULS.data)}</div>
      </div>
      <div>
        <Typography variant="h5"> Show Storage Length</Typography>
        <Button onClick={ULS.getLsLength} variant="contained">
          Show Storage Length
        </Button>
        <div>{ULS.dataLength}</div>
      </div>
    </>
  );
};

export default Targil2;
