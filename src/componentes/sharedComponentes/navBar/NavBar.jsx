import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Container } from '@mui/material';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Shop', 'Reviews', 'Contacts'];

function NavBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{ my: 2, color: "#8B9A46" }} >
                HotPot
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar component="nav" sx={{ backgroundColor: "#383838" }}  >
                <Toolbar>
                    <LocalFireDepartmentIcon />
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ flexGrow: 1, display: { sm: 'none' }, color: "#8B9A46" }}
                    >
                        HotPot
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"

                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <ShoppingCartIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: "#8B9A46" }}
                    >
                        HotPot
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff', backgroundColor: "transparent", ":focus": { color: "#66BB55" } }}>
                                {item}
                            </Button>
                        ))}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"

                            sx={{ mr: 2, display: { sm: 'inline' }, ":focus": { color: "#66BB55" } }}
                        >
                            <ShoppingCartIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>

        </Box>
    )
}

export default NavBar