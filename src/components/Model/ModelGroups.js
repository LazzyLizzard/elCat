import React from 'react';
import {Link} from 'react-router';
import noop from 'lodash/noop';

export default function ModelGroups({modelGroups, onClick = noop}) {
	return (
		<div>
			{modelGroups && modelGroups.map(data => {
				return (
					<div>
						<div
							key={data.group_id}>
							<Link
								to={`/group/${data.group_id}`}
								onClick={onClick}
							>
								<img src={data.imgPath} />{data.group_name}
							</Link>
						</div>
					</div>
				)
			})}
		</div>
	)
}