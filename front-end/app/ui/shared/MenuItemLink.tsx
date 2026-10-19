import { MenuItem } from "@mui/material";
import type { ReactNode } from "react";

export default function MenuItemLink({children}: {children: ReactNode}) {
  return (
    <MenuItem 
        sx={{
            fontSize: "1.2rem",
            textTransform: "uppercase",
            fontWeight: "bold",
            color: "inherit",
            "&.active": {
                color: "yellow"
            }

        }}
    >
        {children}
    </MenuItem>
  )
}