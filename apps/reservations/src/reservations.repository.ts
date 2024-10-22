import { AbstractRepository } from '@app/common/database/abstract.repository';
import { Injectable, Logger } from '@nestjs/common';
import { ReservationDocument } from './models/reservation.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ReservationsRepository extends AbstractRepository<ReservationDocument> {
  protected logger: Logger;

  constructor(
    @InjectModel(ReservationDocument.name)
    private readonly reservationModel: Model<ReservationDocument>,
  ) {
    super(reservationModel);
    this.logger = new Logger(ReservationsRepository.name);
  }

  async createReservation(
    reservationData: Partial<ReservationDocument>,
  ): Promise<ReservationDocument> {
    this.logger.log('Creating a new reservation');
    const createdReservation = new this.reservationModel(reservationData);
    return createdReservation.save();
  }

  async findReservationById(id: string): Promise<ReservationDocument | null> {
    this.logger.log(`Finding reservation with id: ${id}`);
    return this.reservationModel.findById(id).exec();
  }

  async updateReservation(
    id: string,
    updateData: Partial<ReservationDocument>,
  ): Promise<ReservationDocument | null> {
    this.logger.log(`Updating reservation with id: ${id}`);
    return this.reservationModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
  }

  async deleteReservation(id: string): Promise<ReservationDocument | null> {
    this.logger.log(`Deleting reservation with id: ${id}`);
    return this.reservationModel.findByIdAndDelete(id).exec();
  }
}
