import {router} from "expo-router";

export function RouteToPage(pagenumber : number) {
    switch (pagenumber) {
        case 1:
            router.navigate("/ride-page")
            break
        case 2:
            router.navigate("/settings-page")
            break
    }

}