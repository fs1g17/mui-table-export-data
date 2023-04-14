import React from "react";
import saveAs from "file-saver";

import { IconButton } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import {
  GridColDef,
  GridValueGetterParams,
  DataGrid,
} from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "userId",
    headerName: "ID",
    width: 50,
    valueGetter: (params: GridValueGetterParams) => `${params.row.userId}`,
  },
  {
    field: "username",
    headerName: "Username",
    width: 200,
    valueGetter: (params: GridValueGetterParams) => `${params.row.username}`,
  },
  {
    field: "userEmail",
    headerName: "User Email",
    width: 200,
    valueGetter: (params: GridValueGetterParams) => `${params.row.userEmail}`,
  },
];

export interface UserData {
  userId: number;
  username: string;
  userEmail: string;
}

interface ExportTableProps {
  userData: UserData[];
}

export default function ExportTable({ userData }: ExportTableProps) {
  const exportData = () => {
    const header = ["userId", "username", "userEmail"];
  
    const csv = [
      header.join(","), // header row first
      ...userData.map((user) => [user.userId, user.username, user.userEmail]),
    ].join("\r\n");
  
    var data = new Blob([csv], { type: "text/csv" });
    saveAs(data, "output.csv");
  };

  return (
    <div style={{ width: 500, height: 650, position: "relative" }}>
      <DataGrid
        getRowId={(user) => user.userId}
        rows={userData}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10]}
      />
      <IconButton
        onClick={exportData}
        disabled={userData.length === 0}
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          color: "black",
        }}
      >
        <FileDownloadIcon />
      </IconButton>
    </div>
  );
}
