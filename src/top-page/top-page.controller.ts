import { Controller } from '@nestjs/common';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import { TopPageService } from './top-page.service';

@Controller('top-page')
export class TopPageController {
	constructor(
		private readonly topPageService: TopPageService,
		private readonly scheduleRegistry: SchedulerRegistry,
	) {}

	@Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
	async test() {
		console.log('Cron');
	}
}
