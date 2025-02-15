import React, { useState } from "react";
import { 
  Box, TextField, Radio, Button, Typography, Alert, CircularProgress, Paper, Stack 
} from "@mui/material";

const CreateGDG = () => {
  const [gdgName, setGdgName] = useState("");
  const [limit, setLimit] = useState("LIMIT");
  const [limitValue, setLimitValue] = useState("");
  const [scratch, setScratch] = useState("SCRATCH");
  const [purge, setPurge] = useState("PURGE");
  const [order, setOrder] = useState("FIFO");
  const [empty, setEmpty] = useState("EMPTY");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!gdgName.trim()) {
      setMessage({ type: "error", text: "GDG Base Name is required!" });
      return;
    }
    if (limit === "LIMIT" && !limitValue.trim()) {
      setMessage({ type: "error", text: "Please enter a version limit!" });
      return;
    }

    const gdgData = { gdgName, limit, limitValue, scratch, purge, order, empty };
    setLoading(true);

    try {
      const response = await fetch("/api/create-gdg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(gdgData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage({ type: "success", text: "GDG Base created successfully!" });
        setGdgName("");
        setLimit("LIMIT");
        setLimitValue("");
        setScratch("SCRATCH");
        setPurge("PURGE");
        setOrder("FIFO");
        setEmpty("EMPTY");
      } else {
        setMessage({ type: "error", text: result.message || "Error creating GDG Base" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Network error. Try again!" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "1200px", margin: "auto", padding: 3 }}>

      {/* Display Success or Error Message */}
      {message && (
        <Alert severity={message.type} sx={{ mb: 2 }}>
          {message.text}
        </Alert>
      )}
      
      <Box sx={{ mb: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0D47A1", textAlign: "left" }}>
        Create GDG Base
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ textAlign: "left", mt: 0.5 }}>
      Quickly set up your GDG base with intuitive, easy-to-configure options
      </Typography>
    </Box>

      <form onSubmit={handleSubmit}>
        {/* GDG Base Name */}
        <Typography variant="h6" sx={{ mt: 3}}>
          GDG Base Name
        </Typography>
        <TextField
          fullWidth
          placeholder="Enter your GDG base name" 
          value={gdgName}
          onChange={(e) => setGdgName(e.target.value)}
          margin="normal"
          required
          InputLabelProps={{ shrink: false }} 
        />

        {/* LIMIT/NOLIMIT in Card Format */}
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>LIMIT/NOLIMIT</Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          {[
            { value: "LIMIT", title: "LIMIT", desc: "Set a specific version limit." },
            { value: "NOLIMIT", title: "NOLIMIT", desc: "Allow unlimited versions." },
          ].map((option) => (
            <Paper
              key={option.value}
              sx={{
                p: 2,
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: limit === option.value ? "2px solid #1976d2" : "1px solid #ccc",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onClick={() => setLimit(option.value)}
            >
              <Box>
                <Typography variant="subtitle1">{option.title}</Typography>
                <Typography variant="body2" color="textSecondary">{option.desc}</Typography>
              </Box>
              <Radio checked={limit === option.value} />
            </Paper>
          ))}
        </Stack>

        {/* Version Limit Input Field (Only if LIMIT is Selected) */}
        {limit === "LIMIT" && (
          <TextField
            fullWidth
            label="Enter Version Limit"
            value={limitValue}
            onChange={(e) => setLimitValue(e.target.value)}
            margin="normal"
            sx={{ mt: 2 }}
            required
          />
        )}

        {/* SCRATCH/NOSCRATCH */}
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>SCRATCH/NOSCRATCH</Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          {[
            { value: "SCRATCH", title: "SCRATCH", desc: "Automatically delete unused generations." },
            { value: "NOSCRATCH", title: "NOSCRATCH", desc: "Keep generations until manually removed." },
          ].map((option) => (
            <Paper
              key={option.value}
              sx={{
                p: 2,
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: scratch === option.value ? "2px solid #1976d2" : "1px solid #ccc",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onClick={() => setScratch(option.value)}
            >
              <Box>
                <Typography variant="subtitle1">{option.title}</Typography>
                <Typography variant="body2" color="textSecondary">{option.desc}</Typography>
              </Box>
              <Radio checked={scratch === option.value} />
            </Paper>
          ))}
        </Stack>

        {/* PURGE/NOPURGE */}
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>PURGE/NOPURGE</Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          {[
            { value: "PURGE", title: "PURGE", desc: "Erase outdated data immediately." },
            { value: "NOPURGE", title: "NOPURGE", desc: "Keep old data for a longer period." },
          ].map((option) => (
            <Paper
              key={option.value}
              sx={{
                p: 2,
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: purge === option.value ? "2px solid #1976d2" : "1px solid #ccc",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onClick={() => setPurge(option.value)}
            >
              <Box>
                <Typography variant="subtitle1">{option.title}</Typography>
                <Typography variant="body2" color="textSecondary">{option.desc}</Typography>
              </Box>
              <Radio checked={purge === option.value} />
            </Paper>
          ))}
        </Stack>

        {/* LIFO/FIFO */}
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>FIFO/LIFO</Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          {[
            { value: "FIFO", title: "FIFO", desc: "First In, First Out order." },
            { value: "LIFO", title: "LIFO", desc: "Last In, First Out order." },
          ].map((option) => (
            <Paper
              key={option.value}
              sx={{
                p: 2,
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: order === option.value ? "2px solid #1976d2" : "1px solid #ccc",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onClick={() => setOrder(option.value)}
            >
              <Box>
                <Typography variant="subtitle1">{option.title}</Typography>
                <Typography variant="body2" color="textSecondary">{option.desc}</Typography>
              </Box>
              <Radio checked={order === option.value} />
            </Paper>
          ))}
        </Stack>


        {/* EMPTY/NOEMPTY */}
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>EMPTY/NOEMPTY</Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          {[
            { value: "EMPTY", title: "EMPTY", desc: "Delete GDG base when all generations are gone." },
            { value: "NOEMPTY", title: "NOEMPTY", desc: "Keep GDG base even if empty." },
          ].map((option) => (
            <Paper
              key={option.value}
              sx={{
                p: 2,
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: empty === option.value ? "2px solid #1976d2" : "1px solid #ccc",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onClick={() => setEmpty(option.value)}
            >
              <Box>
                <Typography variant="subtitle1">{option.title}</Typography>
                <Typography variant="body2" color="textSecondary">{option.desc}</Typography>
              </Box>
              <Radio checked={empty === option.value} />
            </Paper>
          ))}
        </Stack>

        {/* Submit Button */}
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 3, height: "50px" }} type="submit" disabled={loading}>
          {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Create GDG Base"}
        </Button>
      </form>
    </Box>
  );
};

export default CreateGDG;
