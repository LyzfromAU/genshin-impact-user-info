import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { worldList } from './world';
import { avatarList } from './avatar';


function User(props) {
    return (
        <div className="container">
            <div className="top">
                <div className="head">{`UID: ${props.uid===''?props.random:props.uid}`}</div>
                <div className="status">
                    <div className="status-item">
                        <div>Active days</div>
                        <div>{props.data.data.stats.active_day_number}</div>
                    </div>
                    <div className="status-item">
                        <div>Achievements</div>
                        <div>{props.data.data.stats.achievement_number}</div>
                    </div>
                    <div className="status-item">
                        <div>Avatars</div>
                        <div>{props.data.data.stats.avatar_number}</div>
                    </div>
                    <div className="status-item">
                        <div>Spiral Abyss</div>
                        <div>{props.data.data.stats.spiral_abyss}</div>
                    </div>
                    <div className="status-item">
                        <div>Common Chests</div>
                        <div>{props.data.data.stats.common_chest_number}</div>
                    </div>
                    <div className="status-item">
                        <div>Exquisite Chests</div>
                        <div>{props.data.data.stats.exquisite_chest_number}</div>
                    </div>
                    <div className="status-item">
                        <div>Precious Chests</div>
                        <div>{props.data.data.stats.precious_chest_number}</div>
                    </div>
                    <div className="status-item">
                        <div>Luxurious Chests</div>
                        <div>{props.data.data.stats.luxurious_chest_number}</div>
                    </div>
                    <div className="status-item">
                        <div>Anemoculus</div>
                        <div>{props.data.data.stats.anemoculus_number}</div>
                    </div>
                    <div className="status-item">
                        <div>Geoculus</div>
                        <div>{props.data.data.stats.geoculus_number}</div>
                    </div>
                    <div className="status-item">
                        <div>Electroculus</div>
                        <div>{props.data.data.stats.electroculus_number}</div>
                    </div>
                </div>
                <div className="exploration">
                    {props.data.data.world_explorations.map((world)=>(<div className="exploration-item">
                        <img src={world.icon} alt={world.name} className="world-img"/>
                        <div>
                            <div>{worldList[world.name]}</div>
                            <div>{`${world.exploration_percentage/10}%`}</div>
                        </div>
                        </div>))}
                </div>
            </div>
            <div className="character">
                {props.data.data.avatars.map((avatar)=>(<div className="card">
                    <img src={avatar.image} alt={avatar.name} className="card-img"/>
                    <div>{avatarList[avatar.name]}</div>
                    <div>{`Active-Cs: ${avatar.actived_constellation_num}`}</div>
                    <div className="level">
                        <div>{`Lv: ${avatar.level}`}</div>
                        <div className="heart-row"><FavoriteIcon className="heart"/>{avatar.fetter}</div>
                    </div>
                </div>))}
                
            </div>
            <div className="bottom">
                <button onClick={()=>{
                    window.location.reload();
                }} className="refresh-btn">Search another</button>
            </div>
        </div>
    )
}

export default User;
