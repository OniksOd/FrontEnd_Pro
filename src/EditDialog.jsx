import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import { Form } from "./Form";

export const EditDialog = ({ item, onSuccess, onClose }) => {
  if (!item) {
    return null;
  }

  const onFormSuccess = (data) => {
    onSuccess({
      ...item,
      ...data,
    });
    onClose();
  };
  return (
    <Dialog open={!!item}>
      <DialogTitle sx={{ m: 0, p: 2 }}>Edit Todo Item</DialogTitle>
      <IconButton
        onClick={onClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        sx={{
          py: 1,
        }}
      >
        <Form
          item={item}
          onSuccess={onFormSuccess}
          containerProps={{
            sx: {
              mt: 2,
              minWidth: 400,
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
