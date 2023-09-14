import React from 'react';
import './Styles/Team.css';
import { team } from '../Constants';
import { FaUserTie } from 'react-icons/fa';
import { sir } from '../assets';

function Team() {
	return (
		<div className='team_container'>
		<h1>Our Team</h1>

		<div className='team'>
			<div className='lead_card'>
			<div>
				<img src={sir} className='profile_main' width='90px' alt='' />
			</div>
			<div className='main_card_content'>
				<h1>Dr. Ali Arshad</h1>
				<h2>Supervisor and Lead</h2>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, ullam?</p>
			</div>
			</div>

			{team.map((teamMember, index) => (
			<div className='team__member animated fadeInUp delay-1s team__member--type1' key={teamMember.id}>
				<div className='team__member__icon'>
				<FaUserTie />
				</div>

				<div className='team__member__date'>
					<img src={teamMember.img} width='120px' alt='' />
				</div>
				<div className='team__member__content'>
					<div className='team__member__title'>
						<h4>{teamMember.Name}</h4>
						<p className='team__member_desc'>{teamMember.title}</p>
					</div>
					<div className='team__member__description'>
						<p>{teamMember.desc}</p>
					</div>
				</div>
			</div>
			))}
		</div>
		</div>
	);
	}

export default Team;
