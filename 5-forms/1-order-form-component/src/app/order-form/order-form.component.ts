import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-shop-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.sass'],
})
export class OrderFormComponent implements OnInit {

  public form: FormGroup;

  @Output()
  public confirm: EventEmitter<FormData> = new EventEmitter<FormData>();

  constructor(
    private readonly fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['Test name', [Validators.required]],
      telephone: ['+44 7911 123456', [Validators.required, this.phoneValidator]],
      email: ['test@gmail.com', [Validators.email, Validators.required]],
      address: ['Test 123', [Validators.required]],
    });
  }

  public submit(): void {
    console.log(this.form.value.name);
    console.log(this.form.get('name').value);

    // console.log('errors', this.form.errors);

    if (this.form.valid) {
      this.confirm.emit(this.form.value);
      this.form.reset();
    } else {
      this.form.setErrors({
        email: this.form.get('email')?.errors,
        telephone: this.form.get('telephone')?.errors,
        name: this.form.get('name')?.errors,
      });
    }
  }

  public phoneValidator(control: FormControl): ValidationErrors | null {
    const phone = control.value;
    return phone && phone.substring(0, 1) === '+' && phone.length >= 13
      ? null
      : {
        isNotMatch: true,
        error: 'Телефон должен быть в формате +44 7911 123456',
      };
  }

}
