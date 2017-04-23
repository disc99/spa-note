import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render((
    <Router hisotry={browserHisory}>
        <Route component={App}>
            <Route path="/" component={Dashboard}>
                <Route path="notes/:id/edit" component={NoteEdit} />
            </Route>
            <Route path="notes/:id" component={Note} />
            <Route path="starred" component={Starred} />
        </Route>
    </Router>
    ),document.getElementById('app')
);