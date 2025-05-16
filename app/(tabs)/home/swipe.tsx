import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {useLocalSearchParams} from 'expo-router';

import People from '@/components/tabs/people';
import Live from '@/components/tabs/live';
import Events from '@/components/tabs/events';
import Bars from '@/components/tabs/bars';
import Cafes from '@/components/tabs/cafes';
import Clubs from '@/components/tabs/clubs';

const initialLayout = {width: Dimensions.get('window').width};

const routes = [
    {key: 'bars', title: 'Bars'},
    {key: 'cafes', title: 'Cafés'},
    {key: 'clubs', title: 'Clubs'},
    {key: 'events', title: 'Events'},
    {key: 'live', title: 'Live'},
    {key: 'people', title: 'People'},
];

const renderScene = SceneMap({
    bars: Bars,
    cafes: Cafes,
    clubs: Clubs,
    events: Events,
    live: Live,
    people: People,
});

export default function SwipeTabs() {
    const params = useLocalSearchParams();
    const tab = params.tab; // Explizit den tab-Parameter extrahieren
    const [index, setIndex] = useState(0);

    console.log("Search Params:", params);

    // Initial oder bei Param-Änderung Tab setzen
    useEffect(() => {
        console.log("NEWINDEX: ", tab);
        if (typeof tab === 'string') {
            const newIndex = routes.findIndex((r) => r.key === tab);
            if (newIndex !== -1) {
                setIndex(newIndex);
            }
        }
    }, [tab]);

    return (
        <>
        <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            lazy // 👈 Lädt Tabs nur bei Bedarf
            removeClippedSubviews // 👈 Verbessert Performance
        />
        </>
    )
}