
Yl = Ql,
Gl = n.p + "static/media/mta.9a1ab1464087189f23b3.png",
Xl = n.p + "static/media/menDis.1617be8a935e3150ccf0.png",
Jl = function(e) {
    var t = e.name,
        n = e.num,
        r = e.img,
        o = e.mta,
        a = e.dis,
        i = e.left;
    e.right;
    return (0, Mr.jsxs)( Dr, {}
        "data-aos": i ? "zoom-out-left" : "zoom-out-right",
        spacing: 1,
        width: {
            xs: "100%",
            md: "50%"
        },
        bgcolor: Ai,
        p: 2,
        borderRadius: 4,
        sx: {
            boxShadow: "8px 4px 12px rgba(0,0,0,0.30)"
        },
        children: [(0, Mr.jsx)(Dr, {
            alignItems: "center",
            children: (0, Mr.jsx)(eo, {
                variant: "subtitle1",
                fontWeight: 700,
                children: a ? "Discord Server" : "Multi Theft Auto Server"
            })
        }), (0, Mr.jsx)(Yl, {
            sx: {
                bgcolor: Li
            }
        }), (0, Mr.jsxs)(Dr, {
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            children: [(0, Mr.jsx)(eo, {
                variant: "h6",
                fontWeight: 700,
                children: t
            }), (0, Mr.jsxs)(Dr, {
                sx: {
                    fontSize: {
                        xs: ".7rem",
                        sm: "1rem"
                    }
                },
                direction: "row",
                alignItems: "center",
                spacing: 1,
                children: [(0, Mr.jsx)("span", {
                    children: n
                }), " ", (0, Mr.jsx)(pl, {})]
            })]
        }), (0, Mr.jsxs)(Ji, {
            sx: {
                ":hover img": {
                    scale: "1.2"
                }
            },
            children: [(0, Mr.jsx)(Dr, {
                sx: {
                    overflow: "hidden",
                    borderRadius: 4,
                    img: {
                        transition: ".3s"
                    }
                },
                children: (0, Mr.jsx)("img", {
                    src: r
                })
            }), (0, Mr.jsxs)(Dr, {
                direction: "row",
                spacing: 1,
                justifyContent: "end",
                position: "absolute",
                bottom: 28,
                right: 28,
                children: [(0, Mr.jsx)(Tl, {
                    "data-aos": "fade-in-right",
                    target: "_blank",
                    href: "https://discord.gg/men",
                    startIcon: (0, Mr.jsx)(il, {}),
                    variant: "contained",
                    sx: {
                        borderRadius: 2,
                        bgcolor: "#5372ff",
                        display: a ? "flex" : "none"
                    },
                    children: "Join Server"
                }), (0, Mr.jsx)(Tl, {
                    "data-aos": "fade-in-left",
                    onClick: function() {
                        window.open("mtasa://94.23.68.73:22003", "_self")
                    },
                    startIcon: (0, Mr.jsx)(dl, {
                        size: "1.1rem"
                    }),
                    variant: "contained",
                    sx: {
                        borderRadius: 2,
                        bgcolor: Li,
                        display: o ? "flex" : "none"
                    },
                    children: "Join Server"
                })]
            })]
        })]